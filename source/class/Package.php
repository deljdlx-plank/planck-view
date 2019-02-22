<?php

namespace Planck\View;

use Phi\HTML\CSSFile;
use Phi\HTML\JavascriptFile;

abstract class Package extends Component
{


    protected $javascriptPackageDescriptor = [];
    protected $cssPackageDescriptor = [];


    /**
     * @return JavascriptFile[]
     */
    public function getJavascriptPackageDescriptor()
    {
        $requiredPackages = $this->getFrontPackages();
        $descriptor = [];

        foreach ($requiredPackages as $package) {

            $descriptor = array_merge(
                $descriptor,
                $package->getJavascriptPackageDescriptor()
            );
        }
        return array_merge($descriptor, $this->javascriptPackageDescriptor);
    }

    public function addJavascriptFile($source, $priority = null)
    {
        $javascript = parent::addJavascriptFile($source, $priority);
        $filepath = $this->getApplication()->getPublicFilepath().'/'.$source;

        if(is_file($filepath)) {
            $this->javascriptPackageDescriptor[$filepath] = $javascript;
        }
        return $javascript;

    }

    //=======================================================

    /**
     * @return CSSFile[]
     */
    public function getCSSPackageDescriptor()
    {
        $requiredPackages = $this->getFrontPackages();
        $descriptor = [];

        foreach ($requiredPackages as $package) {

            $descriptor = array_merge(
                $descriptor,
                $package->getCSSPackageDescriptor()
            );
        }
        return array_merge($descriptor, $this->cssPackageDescriptor);
    }



    public function addCSSFile($source, $priority = null)
    {
        $css = parent::addCSSFile($source, $priority);
        $filepath = $this->getApplication()->getPublicFilepath().'/'.$source;

        if(is_file($filepath)) {
            $this->cssPackageDescriptor[$filepath] = $css;
        }
        return $css;

    }


}