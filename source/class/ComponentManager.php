<?php

namespace Planck\View;

use Phi\HTML\CSSFile;
use Phi\HTML\JavascriptFile;
use Phi\HTML\Traits\HasAsset;

class ComponentManager
{

    use HasAsset;


    const RESOURCE_PRIORITY_RUNTIME = 1024;
    const RESOURCE_PRIORITY_DEFAULT = 2048;
    const RESOURCE_PRIORITY_INCLUDE = 4096;
    const RESOURCE_PRIORITY_REQUIRE = 8192;


    /**
     * @var Component[]
     */
    protected $components = array();

    protected $packages = [];



    public function __construct()
    {


    }




    public function registerPackage($descriptor)
    {
        $this->packages = array_merge(
            $this->packages,
            $descriptor
        );
        return $this;
    }




    public function registerComponent(\Phi\HTML\Component $component)
    {
        $this->components[] = $component;
        return $this;
    }


    public function getComponents()
    {
        return $this->components;
    }

    public function getJavascripts()
    {
        $components = $this->getComponents();

        $tempJavascripts = [];

        //=======================================================
        //refactor this
        foreach ($this->javascriptFiles as $priority => $javascriptsPerPriority) {
            if(!array_key_exists($priority, $tempJavascripts)) {
                $tempJavascripts[$priority] = [];
            }

            $tempJavascripts[$priority] = array_merge(
                $tempJavascripts[$priority],
                $javascriptsPerPriority
            );
        }


        foreach ($components as $component) {
            foreach ($component->getJavascriptTags() as $priority => $javascriptsPerPriority) {

                if(!array_key_exists($priority, $tempJavascripts)) {
                    $tempJavascripts[$priority] = [];
                }

                $tempJavascripts[$priority] = array_merge(
                    $tempJavascripts[$priority],
                    $javascriptsPerPriority
                );
            }
        }

        krsort($tempJavascripts);

        $javascripts = $this->mergeResourceArray($tempJavascripts);

        $javascripts = $this->packageJavascripts($javascripts);

        return $javascripts;
    }

    protected function packageJavascripts($javascripts)
    {
        $packedJavascripts = [];


        foreach ($javascripts as $js) {
            $source = $js->getSource();
            if(array_key_exists($source, $this->packages)) {
                $packageURL = $this->packages[$source];
                $packageJavascript = new JavascriptFile($packageURL);
                $packedJavascripts[$packageURL] = $packageJavascript;
            }
            else {
                $packedJavascripts[$source] = $js;
            }
        }
        return $packedJavascripts;
    }



    public function getCSS()
    {

        $components = $this->getComponents();

        $tempCSS = [];


        foreach ($this->cssFiles as $priority => $cssPerPriority) {

            if(!array_key_exists($priority, $tempCSS)) {
                $tempCSS[$priority] = [];
            }

            $tempCSS[$priority] = array_merge(
                $tempCSS[$priority],
                $cssPerPriority
            );
        }



        foreach ($components as $component) {
            foreach ($component->getCSSTags() as $priority => $cssPerPriority) {

                if(!array_key_exists($priority, $tempCSS)) {
                    $tempCSS[$priority] = [];
                }

                $tempCSS[$priority] = array_merge(
                    $tempCSS[$priority],
                    $cssPerPriority
                );
            }
        }

        krsort($tempCSS);

        $css = $this->mergeResourceArray($tempCSS);

        $css = $this->packageCSS($css);

        return $css;

    }


    protected function packageCSS($cssList)
    {
        $packedCSS = [];


        foreach ($cssList as $css) {
            $source = $css->getSource();
            if(array_key_exists($source, $this->packages)) {
                $packageURL = $this->packages[$source];
                $packageCSS = new CSSFile($packageURL);
                $packedCSS[$packageURL] = $packageCSS;
            }
            else {
                $packedCSS[$source] = $css;
            }
        }
        return $packedCSS;
    }















    private function mergeResourceArray($resourceArray)
    {

        $injectedResources = [];
        $resources = [];

        foreach ($resourceArray as $resourcesPerPriority) {
            foreach ($resourcesPerPriority as $resource) {
                $key = $resource->getSource();
                if(!isset($injectedResources[$key])) {
                    $injectedResources[$key] = true;
                    $resources[] = $resource;
                }
            }
        }
        return $resources;
    }
}