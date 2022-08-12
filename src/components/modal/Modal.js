import React from 'react'
import CancelIcon from '../../assets/svg/CancelIcon'
import PublishIcon from '../../assets/svg/PublishIcon'
import { Input } from '../../utilitty'
import './Modal.css'
export default function Modal() {
    const [formData, setFormData] = React.useState({
        productName: '',
        brand: '',
        rom_ram: '',
        tag: [],
        price: '',
    })

    const handleFormData = (e) => {
        e.prevDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    //console.log(formData)

    return (

        <div className="modal fade  " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title" id="exampleModalLabel">Add Product</p>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <Input label={'Product name'}
                                placeholder={'Enter your product name'}
                                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                            />
                            <div className="row">
                                <div className="col-6">
                                    <Input label={'Brand'}
                                        placeholder={'Enter brand name'}
                                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                    />

                                </div>
                                <div className="col-6">
                                    <Input label={'Ram/Rom'}
                                        placeholder={'Zip code'}
                                        onChange={(e) => setFormData({ ...formData, rom_ram: e.target.value })}
                                    />
                                </div>
                            </div>
                            <label htmlFor="tags-input" className="form-label">Tags</label>
                            <select className="form-select" aria-label="Default select example"
                                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                            >
                                <option value="1">
                                    Select Tags
                                </option>
                                <option value="Best value">Best value</option>
                                <option value="Best Performance">Best Performance</option>
                                <option value="Best Camera">Best Camera</option>
                            </select>

                            <Input label={'Price'}
                                placeholder={'Enter your product price'}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn cancel-btn d-flex gap-1 " data-bs-dismiss="modal">

                            <CancelIcon />
                            <span className='cancel-text'  >Cancel</span>

                        </button>
                        <button type="button" className="btn publish-btn d-flex gap-1 " data-bs-dismiss="modal">

                            <PublishIcon />
                            <span className='cancel-text'
                                onClick={() => {
                                    console.log(formData)
                                }}
                            >Publish</span>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
