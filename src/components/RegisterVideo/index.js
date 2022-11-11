import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(initialFormValues) {
    const [formValues, setformValues] = React.useState(initialFormValues);

    function updateFormValues(value) {
        setformValues({
            ...formValues,
            ...value
        })
    }

    return {
        formValues,
        handleChange: (event) => updateFormValues({[event.target.name]: event.target.value}),
        clearForm: () => setformValues({})
    };
}

export default function RegisterVideo() {
    const [formVisible, setformVisible] = React.useState(false);

    const createVideoForm = useForm({ title: "", url: "" })

    function openRegisterVideoModal() {
        setformVisible(true);
    }

    function closeRegisterVideoModal() {
        setformVisible(false);
    }

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={openRegisterVideoModal}>
                +
            </button>
            {/*Hidden html patches cases: */}
            {/* ---> " ? : " Operator or Logics Operators*/}
            { formVisible && (
                <form onSubmit={(event) => {
                    event.preventDefault()
                    console.log(createVideoForm.formValues)
                    closeRegisterVideoModal()
                    createVideoForm.clearForm()
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={closeRegisterVideoModal}>
                            x
                        </button>
                        <input placeholder="Título do vídeo" 
                            value={createVideoForm.formValues.title}
                            name="title"  
                            onChange={createVideoForm.handleChange}
                        />
                        <input placeholder="URL" 
                            value={createVideoForm.formValues.url} 
                            name="url" 
                            onChange={createVideoForm.handleChange}
                        />
                        <button type="submit">
                            Cadastrar Vídeo
                        </button>
                    </div>
                </form>
                )
            }
        </StyledRegisterVideo>
    )
}