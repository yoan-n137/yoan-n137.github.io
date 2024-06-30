export const json = {
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "boolean",
     "name": "question1",
     "title": "活动介绍信和活动回执是否要带去？",
     "isRequired": true,
     "labelTrue": "否",
     "labelFalse": "是"
    },
    {
     "type": "text",
     "name": "question2",
     "visibleIf": "{question1} = false",
     "title": "操作流程如何？"
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "boolean",
     "name": "question3",
     "title": "智慧团建中的数据采集和日记是由队长编写吗？（因为我好像只能查看）",
     "labelTrue": "否",
     "labelFalse": "是"
    },
    {
     "type": "text",
     "name": "question4",
     "title": "在数据采集中的总行程、总步数和总实践时长打算怎么采集？"
    },
    {
     "type": "boolean",
     "name": "question5",
     "title": "“上报外宣报道情况”是必须的吗？",
     "labelTrue": "否",
     "labelFalse": "是"
    },
    {
     "type": "boolean",
     "name": "question6",
     "visibleIf": "{question5} = false",
     "title": "我们是通过团队自营媒体的形式报道吗？",
     "labelTrue": "否",
     "labelFalse": "是"
    },
    {
     "type": "text",
     "name": "question7",
     "visibleIf": "{question6} = true",
     "title": "有什么想法？"
    }
   ],
   "description": "在《关于开展2024年大学生暑期社会实践活动的预通知》中提到“在智慧团建系统每日提交日志，上报外宣报道情况。”"
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "boolean",
     "name": "question16",
     "title": "住宿地点是否确定？",
     "labelTrue": "否",
     "labelFalse": "是"
    },
    {
     "type": "text",
     "name": "question17",
     "visibleIf": "{question16} = false",
     "title": "请说明具体详情"
    },
    {
     "type": "text",
     "name": "question18",
     "visibleIf": "{question16} = true",
     "title": "你正在考虑哪些方案"
    },
    {
     "type": "text",
     "name": "question8",
     "title": "预算中的15000元具体打算怎么分配？"
    },
    {
     "type": "boolean",
     "name": "question9",
     "title": "3000元经费确认申请到了吗？",
     "labelTrue": "否",
     "labelFalse": "是"
    }
   ]
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "text",
     "name": "question10",
     "title": "能否简要讲讲和嘉善日光域营地乐园旅游管理有限公司相关人员沟通的内容？\n"
    },
    {
     "type": "text",
     "name": "question11",
     "title": "在什么情况下可能需要和联系人刘谨畅沟通？\n"
    }
   ]
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "text",
     "name": "question12",
     "title": "届时是打算11人一起进行活动？特定计划考虑分头行动吗？"
    },
    {
     "type": "text",
     "name": "question13",
     "title": "ppt要在哪里进行展示？"
    },
    {
     "type": "text",
     "name": "question14",
     "title": "团员有什么额外要注意的吗？"
    },
    {
     "type": "text",
     "name": "question15",
     "title": "我们的指导老师詹姐有什么实际的作用吗（🤔"
    }
   ]
  },
  {
   "name": "page6",
   "elements": [
    {
     "type": "text",
     "name": "question19",
     "title": "对于个人和团队的实践报告撰写分别有什么想法和建议？"
    }
   ]
  },
  {
   "name": "page7",
   "elements": [
    {
     "type": "text",
     "name": "question21",
     "title": "对调查问卷外观上的个性化要求怎么样？"
    },
    {
     "type": "text",
     "name": "question22",
     "title": "预计要收到多少份"
    },
    {
     "type": "text",
     "name": "question23",
     "title": "主要以哪些形式发放"
    },
    {
     "type": "boolean",
     "name": "question20",
     "title": "真的有必要为了调查问卷制作一个网页吗？",
     "labelTrue": "否",
     "labelFalse": "是"
    },
    {
     "type": "text",
     "name": "question24",
     "visibleIf": "{question20} = false",
     "title": "就我目前了解到的而言，最常规的方案是购买域名和服务器，但是国内的使用最好要备案，像问卷星那种可以直接将问卷嵌入网页，但是不方便个性化（还不如直接用问卷星方便，其他网站也需要时间研究），自己做的话一时半会学不会，最好找会的人；不购买域名的话可以用托管服务（比如github pages)，但是稳定性不知道……"
    }
   ],
   "description": "调查问卷"
  }
 ]
}