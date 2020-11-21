import React from 'react';

export default class ItemAdd extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image: [],
            imagePreviewUrl: []
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let form = document.forms.itemAdd;
        this.props.createItem({
            name: form.name.value,
            image: [...this.state.image]
        });
        // Clear the form and state for the next input.

        this.state.image = null;
        this.state.imagePreviewUrl = null;
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                image: [...this.state.image, file],
                imagePreviewUrl: [...this.state.imagePreviewUrl, reader.result]
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (imagePreviewUrl.map(imgUrl => <img src={imgUrl} style={{height: "100px", width: "100px"}}/>));
        } else {
            $imagePreview = null;
        }
        return (
            <div>
                <form name="itemAdd" onSubmit={this.handleSubmit}>
                    {this.props.type} Image
                    <table style={{width: "300px"}}>
                        <tr>
                            <td><input type="file" onChange={(e) => this.handleImageChange(e) } /></td>
                        </tr>
                        <tr>
                            <div>
                                {$imagePreview}
                            </div>
                        </tr>
                        <tr>
                            <td><button>Submit</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}