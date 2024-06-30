import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import { db } from './firebase'; // 导入Firebase配置

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

const SurveyComponent = () => {
  const onComplete = (survey) => {
    const data = survey.data;
    console.log("Survey results: ", result.data);
    // 将数据保存到Firestore
    db.collection('surveyResults')
      .add(data)
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  };

  return <Survey json={surveyJSON} onComplete={onComplete} />;
};


<<<<<<< HEAD
export default SurveyComponent;
=======
export default SurveyComponent;
>>>>>>> 855c7ac0c5ef4af2f9dc54546bfd479c024b8569
