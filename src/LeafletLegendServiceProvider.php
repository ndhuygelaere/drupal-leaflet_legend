<?php 

namespace Drupal\leaflet_legend;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;

// @note: You only need Reference, if you want to change service arguments.
use Symfony\Component\DependencyInjection\Reference;

/**
 * Modifies the language manager service.
 */
class LeafletLegendServiceProvider extends ServiceProviderBase {

  /**
   * {@inheritdoc}
   */
  public function alter(ContainerBuilder $container) {
    if ($container->hasDefinition('leaflet.service')) {
      $definition = $container->getDefinition('leaflet.service');
      $definition->setClass('Drupal\leaflet_legend\LeafletLegendService');
    }
  }
}

