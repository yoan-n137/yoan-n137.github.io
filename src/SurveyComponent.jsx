import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}




<<<<<<< HEAD
export default SurveyComponent;
=======
export default SurveyComponent;
>>>>>>> 855c7ac0c5ef4af2f9dc54546bfd479c024b8569
