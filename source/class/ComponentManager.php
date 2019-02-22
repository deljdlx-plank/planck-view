<?php

namespace Planck\View;

use Phi\HTML\CSSFile;
use Phi\HTML\JavascriptFile;

class ComponentManager
{

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