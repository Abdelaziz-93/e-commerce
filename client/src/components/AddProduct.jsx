import React from 'react'
import Sidebar from './Sidebar'

export default function AddProduct() {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10">
                    <div className='text-center'>
                        <h1>AddProduct</h1>
                        </div>
                    <div class="row m-auto mb-4">
                        <div class="col-xl-8 col-lg-8">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-body">
                                    <form>
                                    <div class="mb-4">
                                        <label for="product_title" class="form-label">Product title</label>
                                        <input type="text" placeholder="Type here" class="form-control" id="product_title" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_title" class="form-label">Marque</label>
                                        <input type="text" placeholder="Type here" class="form-control" id="product_title" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_price" class="form-label">Price</label>
                                        <input type="number" placeholder="Type here" class="form-control" id="product_price" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_price" class="form-label">Short_description</label>
                                        <input type="text" placeholder="Type here" class="form-control" id="product_price" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="product_price" class="form-label">CategoryId</label>
                                        <input type="text" placeholder="Type here" class="form-control" id="product_price" required="" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label">Description</label>
                                        <textarea placeholder="Type here" class="form-control" rows="7" required=""></textarea>
                                    </div><div class="mb-4"><label class="form-label">Images</label>
                                        <input class="form-control" type="text" placeholder="Inter Image URL" />
                                        <input class="form-control mt-3" type="file" />
                                    </div>
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
