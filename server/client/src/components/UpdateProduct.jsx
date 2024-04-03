import React, { useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'


export default function UpdateProduct() {

    const productId = localStorage.getItem('id')

    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [short,setShort]=useState("")
    const [description,setDescription]=useState("")
    const [marque,setMarque]=useState("")
    const [image,setImage]=useState("")
    const [categoryId,setCategogyId]=useState("")
    function changeName(e){
        setName(e.target.value)
    }
    function changeMarque(e){
        setMarque(e.target.value)
    }
    function changePrice(e){
        setPrice(e.target.value)
    }
    function changeShort(e){
        setShort(e.target.value)
    }
    function changeDescription(e){
        setDescription(e.target.value)
    }
    function changeImage(e){
        setImage(e.target.files[0])
    }
    function changeCategory(e){
        setCategogyId(e.target.value)
    }
    function upadateProduct(e){
       e.preventDefault();
        const formData= new FormData();
        formData.append('name', name);
        formData.append('short_description', short);
        formData.append('marque', marque);
        formData.append('price', price);
        formData.append('categoryId', categoryId);
        formData.append('image', image);
        formData.append('description', description);

      axios.put(`${window.location.origin}/product/updateProduct/${productId}`,formData,{
        headers: {
                        'Content-Type': 'multipart/form-data',
                    }
      }).then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert('product add successfly')
        } else if (res.status === 500) {
            alert('error')
        }
    })
    setName("")
    setDescription("")
    setShort("")
    setPrice("")
    setImage("")
    setMarque("")
    setCategogyId("")
    }
    return (<>
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10">
                    <div className='text-center py-4'>
                        <h1>Uptade Product</h1>
                        </div>
                    <div class="row  mb-4">
                        <div class="col-xl-8 m-auto col-lg-8">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-body">
                                    <form onSubmit={upadateProduct}>
                                    <div class="mb-4">
                                        <label for="product_title"  class="form-label">Product title</label>
                                        <input type="text"  value={name} onChange={changeName}class="form-control"  required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_marque" class="form-label">Marque</label>
                                        <input type="text"  value={marque} onChange={changeMarque} class="form-control" id="product_marque" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_price" class="form-label">Price</label>
                                        <input type="number"  value={price} onChange={changePrice} class="form-control" id="product_price" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_short" class="form-label">Short_description</label>
                                        <input type="text" value={short} onChange={changeShort} class="form-control" id="product_short" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_category" class="form-label">CategoryId</label>
                                        <input type="text"  value={categoryId} onChange={changeCategory} class="form-control" id="product_category" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label">Description</label>
                                        <textarea  value={description} onChange={changeDescription} class="form-control" rows="7" required=""></textarea>
                                    </div><div class="mb-4"><label class="form-label">Images</label>
                                        {/* <input class="form-control" type="text" placeholder="Inter Image URL" /> */}
                                         <input class="form-control mt-3" onChange={changeImage} type="file" />
                                    </div>
                                    <button  className="btn mt-4 btn-dark w-100">Update Product</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
