<template>
  <div id="app">
    <skeleton v-if="isLoading"></skeleton>
    <div class="row" v-if="!isLoading">
      
      <div class="x-col-6 x-col-md-4 x-p-1">
        <div class="x-card">
      <div class="x-card-header">
        Application:#1
      </div>
      <div class="x-card-body">
<bodyfit-component :product="product"></bodyfit-component>
      </div>
    </div>
    </div>
    
    </div>
  </div>
</template>

<script>
import "./assets/js/bootstrap.min.js";

export default {
  name: 'App',
  data(){
    return{
      isLoading:false,
      product:{
    "id": 7026431393980,
    "title": "Shirt",
    "handle": "shirt",
    "description": "<p><b>Color:&nbsp;</b><em>Ghost White</em></p>\n<p><em><strong>Modal is</strong><span>&nbsp;</span>: 5`7``</em></p>",
    "published_at": "2021-08-09T10:43:06+05:00",
    "created_at": "2021-08-09T10:43:04+05:00",
    "vendor": "DevelopmentStoreYstsol",
    "type": "",
    "tags": [
        "another",
        "latest",
        "others",
        "xyzcompany"
    ],
    "price": 10000,
    "price_min": 10000,
    "price_max": 10000,
    "available": true,
    "price_varies": false,
    "compare_at_price": 20000,
    "compare_at_price_min": 20000,
    "compare_at_price_max": 20000,
    "compare_at_price_varies": false,
    "variants": [
        {
            "id": 40515129868476,
            "title": "xs",
            "option1": "xs",
            "option2": null,
            "option3": null,
            "sku": "",
            "requires_shipping": true,
            "taxable": true,
            "featured_image": null,
            "available": true,
            "name": "Shirt - xs",
            "public_title": "xs",
            "options": [
                "xs"
            ],
            "price": 10000,
            "weight": 0,
            "compare_at_price": 20000,
            "inventory_management": "shopify",
            "barcode": ""
        },
        {
            "id": 40515129901244,
            "title": "small",
            "option1": "small",
            "option2": null,
            "option3": null,
            "sku": "",
            "requires_shipping": true,
            "taxable": true,
            "featured_image": null,
            "available": true,
            "name": "Shirt - small",
            "public_title": "small",
            "options": [
                "small"
            ],
            "price": 10000,
            "weight": 0,
            "compare_at_price": 20000,
            "inventory_management": "shopify",
            "barcode": ""
        },
        {
            "id": 40515129934012,
            "title": "medium",
            "option1": "medium",
            "option2": null,
            "option3": null,
            "sku": "",
            "requires_shipping": true,
            "taxable": true,
            "featured_image": null,
            "available": true,
            "name": "Shirt - medium",
            "public_title": "medium",
            "options": [
                "medium"
            ],
            "price": 10000,
            "weight": 0,
            "compare_at_price": 20000,
            "inventory_management": "shopify",
            "barcode": ""
        },
        {
            "id": 40515129966780,
            "title": "large",
            "option1": "large",
            "option2": null,
            "option3": null,
            "sku": "",
            "requires_shipping": true,
            "taxable": true,
            "featured_image": null,
            "available": true,
            "name": "Shirt - large",
            "public_title": "large",
            "options": [
                "large"
            ],
            "price": 10000,
            "weight": 0,
            "compare_at_price": 20000,
            "inventory_management": "shopify",
            "barcode": ""
        },
        {
            "id": 40515129999548,
            "title": "xl",
            "option1": "xl",
            "option2": null,
            "option3": null,
            "sku": "",
            "requires_shipping": true,
            "taxable": true,
            "featured_image": null,
            "available": true,
            "name": "Shirt - xl",
            "public_title": "xl",
            "options": [
                "xl"
            ],
            "price": 10000,
            "weight": 0,
            "compare_at_price": 20000,
            "inventory_management": "shopify",
            "barcode": ""
        },
        {
            "id": 40685393969340,
            "title": "xxl",
            "option1": "xxl",
            "option2": null,
            "option3": null,
            "sku": "",
            "requires_shipping": true,
            "taxable": true,
            "featured_image": null,
            "available": true,
            "name": "Shirt - xxl",
            "public_title": "xxl",
            "options": [
                "xxl"
            ],
            "price": 10000,
            "weight": 0,
            "compare_at_price": 20000,
            "inventory_management": "shopify",
            "barcode": ""
        }
    ],
    "images": [
        "//cdn.shopify.com/s/files/1/0589/5818/4636/products/412R_-HOhFL._AC_UX385.jpg?v=1628487786"
    ],
    "featured_image": "//cdn.shopify.com/s/files/1/0589/5818/4636/products/412R_-HOhFL._AC_UX385.jpg?v=1628487786",
    "options": [
        "Size"
    ],
    "media": [
        {
            "alt": null,
            "id": 22361749651644,
            "position": 1,
            "preview_image": {
                "aspect_ratio": 0.873,
                "height": 441,
                "width": 385,
                "src": "https://cdn.shopify.com/s/files/1/0589/5818/4636/products/412R_-HOhFL._AC_UX385.jpg?v=1628487786"
            },
            "aspect_ratio": 0.873,
            "height": 441,
            "media_type": "image",
            "src": "https://cdn.shopify.com/s/files/1/0589/5818/4636/products/412R_-HOhFL._AC_UX385.jpg?v=1628487786",
            "width": 385
        },
    ],
    "content": "<p><b>Color:&nbsp;</b><em>Ghost White</em></p>\n<p><em><strong>Modal is</strong><span>&nbsp;</span>: 5`7``</em></p>"
}
  }

},
methods:{
  hello: function()
  {
    
  setTimeout(()=>{
  this.isLoading=false
  },1000)
  }
},
mounted() {
  //this.hello();

}
}
</script> 

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
<style>
@import "./assets/styles/body-fit.css";
@import "./assets/styles/bootstrap-body-fit.css";
@import "./assets/styles/sekeleton.css";
</style>
