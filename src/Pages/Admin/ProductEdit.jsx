import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProductEditApiThunk } from '../../redux/ProductReducer';
import { useFormik } from 'formik';

const ProductEdit = () => {


    const {productEdit} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const param = useParams();
    const frmProductEdit = useFormik({
        initialValues:{
            id: productEdit?.id,
            name: productEdit?.name,
            price: productEdit?.price,
            description: productEdit?.description,
            shortDescription: productEdit?.shortDescription,
            quantity: productEdit?.quantity,
            image: productEdit?.image,
        },
        onSubmit: (values) => {
            console.log('values',values)
        },
        enableReinitialize: true
    })



    const getProductEditApi = () => {
        const actionThunk = getAllProductEditApiThunk(param.id);
        dispatch(actionThunk);
    }

    console.log(ProductEdit,'ProductEdit')


    useEffect(()=>{
        getProductEditApi();
        
    },[param.id])
    


    return (
        <div className="container    py-5">

            <h2 className="mb-4 fw-bold">Edit Product</h2>
            <div className="row ">
                <div className="col-md-12">
                    <form className="bg-white p-4" onSubmit={frmProductEdit.handleSubmit}>
                        <div className="row mb-4">
                            <div className="col-md-4 text-center">
                                <img src={frmProductEdit.values.image} alt="vans black" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="productId" className="form-label fw-semibold">ID</label>
                                    <input type="text" className="form-control" id="productId" name="id" value={frmProductEdit.values.id} readOnly onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productName" className="form-label fw-semibold">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={frmProductEdit.values.name} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productPrice" className="form-label fw-semibold">Price ($)</label>
                                    <input type="number" className="form-control" id="price" name="price" value={frmProductEdit.values.price} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="productFeature" checked={false} />
                                    <label className="form-check-label fw-semibold" htmlFor="productFeature" >Feature</label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productQuantity" className="form-label fw-semibold">Quantity</label>
                                    <input type="number" className="form-control" id="quantity" name="quantity" value={frmProductEdit.values.quantity} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productImage" className="form-label fw-semibold">Image Link</label>
                                    <input type="text" className="form-control" id="image" name="image" value={frmProductEdit.values.image} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productShortDesc" className="form-label fw-semibold">Short Description</label>
                            <textarea className="form-control" id="shortDescription" name="shortDescription" rows="2" value={frmProductEdit.values.shortDescription} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productDesc" className="form-label fw-semibold">Description</label>
                            <textarea className="form-control" id="description" name="description" rows="4" value={frmProductEdit.values.description} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur}></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-dark px-4 fw-bold">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit