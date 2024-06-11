// import Product, { findById, fetchAll, deleteById } from "../models/product.js";
import { Product } from "../models/product.js";

export function getAddProduct(req, res, next) {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
}

export function postAddProduct(req, res, next) {
  try {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({
      title: title,
      price: price,
      description: description,
      imageUrl: imageUrl,
    });
    product.save();
  } catch (err) {
    console.log(err);
  }
}

// export function getEditProduct(req, res, next) {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   findById(prodId)
//     // Product.findById(prodId)
//     .then((product) => {
//       if (!product) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: product,
//       });
//     })
//     .catch((err) => console.log(err));
// }

// export function postEditProduct(req, res, next) {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;

//   const product = new Product(
//     updatedTitle,
//     updatedPrice,
//     updatedDesc,
//     updatedImageUrl,
//     prodId
//   );
//   product
//     .save()
//     .then((result) => {
//       console.log("UPDATED PRODUCT!");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// }

// export function getProducts(req, res, next) {
//   fetchAll()
//     .then((products) => {
//       res.render("admin/products", {
//         prods: products,
//         pageTitle: "Admin Products",
//         path: "/admin/products",
//       });
//     })
//     .catch((err) => console.log(err));
// }

// export function postDeleteProduct(req, res, next) {
//   const prodId = req.body.productId;
//   deleteById(prodId)
//     .then(() => {
//       console.log("DESTROYED PRODUCT");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// }
