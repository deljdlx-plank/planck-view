<?php

namespace Planck\View;

use Phi\Traits\Introspectable;
use Planck\Exception\DoesNotExist;

class Theme
{

    use Introspectable;


    protected $filepath;

    /**
     * @var Layout[]
     */
    protected $layouts = [];


    public function __construct()
    {
        $this->sourceFilepath = $this->getDefinitionFolder();

        /*
         * theme root folder - from ./theme/source/class to ./theme
         */
        $this->filepath = realpath($this->sourceFilepath.'/../..');
    }

    public function getFilepath()
    {
        return $this->filepath;
    }

    public function getJavascriptFilepath()
    {
        if(is_dir($this->filepath.'/asset/javascript')) {
            return $this->filepath.'/asset/javascript';
        }
        else {
            throw new DoesNotExist('Javascript filepath does not exist ('.$this->filepath.'/asset/javascript'.')');
        }
    }

    public function hasJavascriptPackage()
    {
        try {
            $this->getJavascriptPackageFile();
            return true;
        }
        catch(DoesNotExist $exception) {
            return false;
        }
    }

    public function hasJavascriptRequirementPackage()
    {
        try {
            $this->getJavascriptRequirementPackageFile();
            return true;
        }
        catch(DoesNotExist $exception) {
            return false;
        }
    }


    public function getJavascriptPackageFile()
    {

        if(is_file($this->getJavascriptFilepath().'/package.json')) {
            return $this->getJavascriptFilepath().'/package.json';
        }

        throw new DoesNotExist('No javascript package ('.$this->getJavascriptFilepath().'/package.json'.')');
    }

    public function getJavascriptRequirementPackageFile()
    {
        if(is_file($this->getJavascriptFilepath().'/package.requirement.json')) {
            return $this->getJavascriptFilepath().'/package.requirement.json';
        }

        throw new DoesNotExist('No javascript package ('.$this->getJavascriptFilepath().'/package.json'.')');
    }




    public function getLayout($layoutName)
    {
        if(array_key_exists($layoutName, $this->layouts)) {
            return $this->layouts[$layoutName];
        }

        if(class_exists($layoutName)) {
            $layout = new $layoutName();
            $this->layouts[$layoutName] = $layout;
            $layout->setTheme($this);
            return $layout;
        }
        else {
            $className = $this->getNamespaceName().'\\View\\Layout\\'.$layoutName;

            if(class_exists($className)) {
                $layout = new $className();
                $this->layouts[$layoutName] = $layout;
                $layout->setTheme($this);
                return $layout;
            }
        }

        throw new DoesNotExist('Layout '.$layoutName.' does not exist in theme '.get_class($this));



    }




}


