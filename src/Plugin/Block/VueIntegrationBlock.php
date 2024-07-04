<?php

namespace Drupal\drupal_vue_integration\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'VueCustomBlock' block.
 *
 * @Block(
 *   id = "vue_integration_block",
 *   admin_label = @Translation("Vue Integration Block"),
 *   category = @Translation("Custom")
 * )
 */
class VueIntegrationBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['#attached']['library'][] = 'drupal_vue_integration/drupal_vue_integration';
    $build['#theme'] = 'posts';
    return $build;
  }
}