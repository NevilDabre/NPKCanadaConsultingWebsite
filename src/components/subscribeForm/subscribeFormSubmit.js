import { SubmissionError } from 'redux-form';

function submit (){
    return setTimeout(()=>{
        throw new SubmissionError('Error in Form');
    }, 1000)
}

export default submit;