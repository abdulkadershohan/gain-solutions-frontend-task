import React from 'react'
import CancelIcon from '../../assets/svg/CancelIcon'
import PublishIcon from '../../assets/svg/PublishIcon'
import { Input } from '../../utilitty'
import './Modal.css'
export default function Modal() {
    const [formData, setFormData] = React.useState(null)

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
                        <form onSubmit={handleFormData} >
                            <Input label={'Product name'}
                                placeholder={'Enter your product name'}
                            />
                            <div className="row">
                                <div className="col-6">
                                    <Input label={'Brand'}
                                        placeholder={'Enter brand name'}
                                    />

                                </div>
                                <div className="col-6">
                                    <Input label={'Ram/Rom'}
                                        placeholder={'Zip code'}
                                    />
                                </div>
                            </div>
                            <label for="tags-input" class="form-label">Tags</label>
                            <select class="form-select" id="tags-input" name="tags[]" multiple>
                                <option disabled hidden value="">Choose a tag...</option>
                                <option value="1" selected="selected">Apple</option>
                                <option value="2">Banana</option>
                                <option value="3">Orange</option>
                            </select>
                            <div class="invalid-feedback">Please select a valid tag.</div>
                            <Input label={'Price'}
                                placeholder={'Enter your product price'}
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
                            <span className='cancel-text'  >Publish</span>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
