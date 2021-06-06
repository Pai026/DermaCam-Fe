import React from "react";
const Products = () => {
  const products = {
    Suggested_Products: [
      {
        product_name:
          "Tea Tree Foaming Face Wash with Tea Tree & Salicylic Acid for Acne & Pimples",
        brand: "Mama Earth",
        brand_link:
          "https://mamaearth.in/product/tea-tree-foaming-face-wash-with-tea-tree-salicylic-acid-for-acne-pimples-150ml/",
        ingredients: [
          "Aqua",
          "Cocamidopropyl Betaine",
          "Disodium Cocoamphodiacetate",
          "Decyl Glucoside",
          "Glycerin",
          "Polysorbate 20",
          "Sodium Lauroyl Sarcosinate",
        ],
        image:
          "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash-with-ingredients_85zdnmuke0xpfych.jpg?auto=format&fit=crop&w=768&auto=compress",
        cures: "Acne",
      },
      {
        product_name: "Acne And Acne Scars, Spots Treatment Bundle",
        brand: "Re'equil",
        brand_link:
          "https://www.reequil.com/products/acne-and-acne-scars-spots-treatment-bundle?variant=33677270286468&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=shopping&utm_campaign=smart&gclid=CjwKCAjwtJ2FBhAuEiwAIKu19kJtfVWOcraIy2SBUao7B1zNmIwbSd8Z7DMyE7Nc1s-nlwcuNDR4ORoCOawQAvD_BwE",
        ingredients: [
          "Aqua",
          "Salicylic Acid",
          "Ethoxydiglycol",
          "Glycerin",
          "Hamamelis Virginiana (Witch Hazel) Extract",
          "Citric Acid",
          "Phenoxyethanol",
          "Ethylhexylglycerin",
          "Hydroxyethylcellulose",
          "Fragrance",
          "Sodium Benzoate",
          "Potassium Sorbate",
          "Sodium Metabisulfite",
          "Sodium Hydroxide",
          "Disodium EDTA",
        ],
        image:
          "https://cdn.shopify.com/s/files/1/0306/6262/3364/products/Acne-and-Acne-Scars-Spots-Treatment-Bundle_7ae3dc3d-7593-4dec-9d0e-e54655fe940d_500x.jpg?v=1592892595",
        cures: "Acne",
      },
      {
        product_name: "2% SALICYLIC ACID SERUM",
        brand: "The Derma Co",
        brand_link:
          "https://thedermaco.com/products/2-salicylic-acid-serum.html?utm_source=google&utm_medium=cpc&utm_term=105028812843&gclid=CjwKCAjwtJ2FBhAuEiwAIKu19tiI25CRlq7pq8sf3n-VfNQX1ro7-3aRxQbg9tNy4uFYW1eVmags4BoCurwQAvD_BwE",
        ingredients: [
          "Aqua",
          "Salicylic Acid",
          "Ethoxydiglycol",
          "Glycerin",
          "Hamamelis Virginiana (Witch Hazel) Extract",
          "Citric Acid",
          "Phenoxyethanol",
          "Ethylhexylglycerin",
          "Hydroxyethylcellulose",
          "Fragrance",
          "Sodium Benzoate",
          "Potassium Sorbate",
          "Sodium Metabisulfite",
          "Sodium Hydroxide",
          "Disodium EDTA",
        ],
        image:
          "https://thedermaco.imgix.net/catalog/product/cache/bed9184c3cd19795474d4c3ec4c54ceb/2/_/2_salicylic_acid.jpg",
        cures: "Acne",
      },
    ],
  };
  return (
    <div className="ml-auto mr-auto">
      {products.Suggested_Products.map((item) => {
        return (
          <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-prose md:max-w-prose h-prose">
            <img
              class="h-full w-full md:w-1/3 mt-auto mb-auto  object-cover rounded-lg rounded-r-none pb-5/6"
              src={item.image}
              alt="bag"
            />
            <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
              <div class="flex items-center">
                <h2 class="text-xl text-gray-800 font-medium mr-auto">
                  {item.product_name}
                </h2>
              </div>
              Ingredients:
              <div class="flex flex-wrap overflow-hidden">
                {item.ingredients.map((item1) => {
                  return (
                    <div key={item1}>
                      <button className="h-6 md:h-12 w-full inline-block md:text-sm text-xs bg-gray-300 hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-transparent rounded-full">
                        {item1}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div class="flex items-center justify-end mt-4 top-auto">
                <a href={item.brand_link} target="_blank" rel="noreferrer">
                  <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">
                    Go to Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
