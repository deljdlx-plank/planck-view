<?php



namespace Planck\View;

use Planck\Exception;
use Planck\Extension\RichTag\Decorator\Taggable;
use Planck\Model\EntityLoader;
use Planck\Traits\IsApplicationObject;

class NavigationItem
{

    use IsApplicationObject;


    const TYPE_ROUTE = 'route';

    const PARAMETER_ENTITY = 'entity';

    protected $type;
    protected $routeName;


    protected $parameters = [];




    /*
        array(
            'type' => NavigationItem::TYPE_ROUTE,
            'route' => 'category',
            'parameters' => array(
                'category' => array(
                    'type' => 'entityLoader',
                    'entity' => Category::class,
                    'loadMethod' => EntityLoader::LOAD_BY_ATTRIBUTE,
                    'attributes' => array(
                        'qname' => 'programmation'
                    )
                )
            )
        );
    */

    public function loadDescriptor(array $descriptor)
    {



        $this->setType($descriptor['type']);
        $this->setRoute($descriptor['route']);

        foreach ($descriptor['parameters'] as $parameterName => $parameterDescriptor) {
            if($parameterDescriptor['type'] == static::PARAMETER_ENTITY) {

                $entity = $this->getEntityLoaderByDescriptor($parameterDescriptor)->getEntity();



                $this->setParameter(
                   $parameterName,
                   $entity
                );
            }
        }
    }


    protected function getEntityLoaderByDescriptor($descriptor)
    {
        $entityLoader = new EntityLoader($this->getApplication()->getModel());
        $entityLoader->setEntityType($descriptor['entity']);
        $entityLoader->setLoadMethod($descriptor['loadMethod']);

        foreach ($descriptor['attributes'] as $attributeName => $value) {
            $entityLoader->setAttributeValue($attributeName, $value);
        }

        return $entityLoader;
    }


    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }


    public function setRoute($routeName)
    {
        $this->routeName = $routeName;
    }


    public function setParameter($name, $parameter)
    {
        $this->parameters[$name] = $parameter;
        return $this;
    }

    public function getURL()
    {
        if($this->type == static::TYPE_ROUTE) {
            return $this->getURLByRoute();
        }
    }


    public function getURLByRoute()
    {
        if(!$this->routeName) {
            throw new Exception('A route name must be specified');
        }
        return $this->getApplication()->buildRoute($this->routeName, $this->parameters);
    }


}


