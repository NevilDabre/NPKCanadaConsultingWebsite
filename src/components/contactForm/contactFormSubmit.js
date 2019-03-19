import { SubmissionError } from 'redux-form'

function submit(values){
    return setTimeout(() => {
        throw new SubmissionError('Error in Form')
    }, 1000);
}

export default submit;