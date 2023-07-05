import React from 'react'

function FormInputFile({ id, accept, name, classes, placeholder }) {

    const type = {
        "image": "image/*",
        "document": ".pdf, .txt, .docx",
        "audio": "audio/*",
        "video": "video"
    }

    return (
        <>
            {accept === 'image' && <div className='notation'>* Aceita-se apenas arquivos de imagens, tais como .jpg, .png e .gif</div>}
            <input
                accept={type[accept]}
                type="file"
                name={name}
                className={"form-control " + classes}
                id={id}
                placeholder={placeholder} />
        </>
    )
}
export default FormInputFile