import type { Schema, Struct } from '@strapi/strapi';

export interface SharedProductBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_blocks';
  info: {
    displayName: 'ProductBlock';
  };
  attributes: {
    custom_title: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.product-block': SharedProductBlock;
    }
  }
}
