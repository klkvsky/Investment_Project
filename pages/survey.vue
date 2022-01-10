<template>
  <div class="survey">
    <survey :survey="survey"> </survey>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'

// import $ from "jquery";
// import Inputmask from 'inputmask';
// import 'inputmask/dist/inputmask';
import * as SurveyVue from 'survey-vue'
// import * as widgets from "surveyjs-widgets";

const Survey = SurveyVue.Survey

export default Vue.extend({
  components: {
    Survey,
  },
  data() {
    const json = {
      pages: [
        {
          questions: [
            {
              type: 'radiogroup',
              name: 'Инвестор',
              title: 'Инвестор?',
              isRequired: true,
              choices: ['Юридическое лицо', 'Физическое лицо'],
            },
          ],
        },
        {
          questions: [
            {
              type: 'radiogroup',
              name: 'Вы, выберете вариант ответа',
              title: 'Вы, выберете вариант ответа',
              isRequired: true,
              choices: ['Индивидуальный инвестор', 'Коллективные инвестиции'],
            },
          ],
        },
        {
          questions: [
            {
              type: 'radiogroup',
              name: 'Sphere',
              title: 'Сфера инвестирования (предпочтения)',
              isRequired: true,
              choices: [
                'Производство',
                'Строительство',
                'Девелопмент',
                'Действующий бизнес',
                'HoReCa',
                'Другое',
              ],
            },
            {
              type: 'text',
              isRequired: true,
              visibleIf: "{Sphere} = 'Другое'",
              name: 'Другие варианты:',
              title: 'Другие варианты:',
            },
          ],
        },
        {
          questions: [
             {
              type: 'text',
              isRequired: true,
              name: 'Регион:',
              title: 'Регион инвестирования:',
            },
          ],
        },
        {
          questions: [
           {
              type: 'multipletext',
              name: 'Планируемая сумма инвестирования',
              title: 'Планируемая сумма инвестирования',
              colCount: 2,
              items: [
                {
                  name: 'mostamount',
                  title: 'От',
                },
                {
                  name: 'leastamount',
                  title: 'До',
                },
              ],
            },
          ],
        },
        {
          questions: [
            {
              type: 'radiogroup',
              name: 'Выберете из 2 вариантов',
              title: 'Выберете из 2 вариантов',
              isRequired: true,
              choices: ['Прямой инвестор', 'Официальный представитель'],
            },
          ],
        },
        {
          questions: [
            {
              type: 'text',
              name: 'Имя',
              isRequired: true,
              title: 'Ваше имя?',
            },
            {
              type: 'text',
              isRequired: true,
              name: 'телефон',
              title: 'Введите ваш номер телефона',
            },
          ],
        },
      ],
    }

    const model = new SurveyVue.Model(json)
    model.locale = 'ru'
    model.showQuestionNumbers = 'off'
    ;(model.requiredText = ''),
      model.onComplete.add((model) => {
        this.result = model.data
        this.sendResults()
      })
    return {
      survey: model,
    }
  },
  methods: {
    sendResults() {
      console.log(this.result)
      this.$router.push('/investor')
    },
  },
})
</script>

<style lang="scss">
.sv_main .sv_body {
  border-top: none;
  background-color: #f5f5f7;
}

.sv_main .sv_p_root > .sv_row {
  border-bottom: none;
}

.sv_main .sv_container .sv_body .sv_p_root > .sv_row {
  margin: 0 5%;
}

.sv_main .sv_container .sv_body .sv_p_root .sv_q_title {
  font-size: 2rem;
  margin: 0;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.sv_main .sv_container .sv_body .sv_p_root fieldset.sv_qcbc {
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
}

.sv_qstn .sv-q-col-1, .sv-question .sv-q-col-1{
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.sv_main .sv_container .sv_body .sv_p_root .sv_q_checkbox_label,
.sv_main .sv_container .sv_body .sv_p_root .sv_q_radiogroup_label {
  background-color: #fafafa;
  text-align: center;
  height: 4rem;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(231, 231, 231, 1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 500;

  &:hover{
    // background-color: rgb(235, 239, 252) !important;
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  }
}

.sv_q_radiogroup.sv-q-col-1.checked {
  & .sv_q_radiogroup_label {
    background-color: rgb(82, 123, 255) !important;
    border: 1px solid rgb(82, 123, 255) !important;

    & .sv-string-viewer {
      color: #ffffff !important;
    }
  }
}

.sv_main .sv_container .sv_body .sv_nav {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.sv_main input[type='button'],
.sv_main button {
  font-size: 1rem;
  background-color: #333;
  border-radius: 100px;
  color: #fff;
}


.sv_main input[type="button"]:hover, .sv_main button:hover{
  background-color: rgb(82, 123, 255);
}

.sv_q_radiogroup_label {
  input {
    display: none;
  }
}

#sq_103,
#sq_104,
#sq_108,
#sq_109,
#sq_118,
#sq_119 {
  // margin: 0 20%;
  // border: 1px solid black;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  // border-bottom: 1px solid #333;
  padding: 1rem;
  margin-bottom: 2rem;
  // border-radius: 10px;
}

// .sv_row {
//   // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
// }

.sv_main .sv_p_root > .sv_row:nth-child(even) {
  background-color: #f5f5f7;
}

.sv_main .sv_p_root > .sv_row:nth-child(odd) {
  background-color: #f5f5f7;
}

.sv_main .sv_container .sv_body .sv_p_root .sv_q .sv_q_other input,
.sv_main .sv_container .sv_body .sv_p_root .sv_q .sv_q_dropdown_control,
.sv_main
  .sv_container
  .sv_body
  .sv_p_root
  .sv_q
  input:not([type='button']):not([type='reset']):not([type='submit']):not([type='image']):not([type='checkbox']):not([type='radio']),
.sv_main .sv_container .sv_body .sv_p_root .sv_q select {
  border: none;
  border-radius: 100px;
  width: 50%;
  margin-left: 25%;
  font-size: 1.5rem;
  padding: .5rem 1rem;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  color: #111;
}

.sv_q_mt_row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.sv_q_mt_label{
  display: flex;
  flex-direction: column;

  .sv_q_mt_title{
    text-align: center;
    font-size: 1rem;
    margin-bottom: .5rem;
    font-weight: 600;
  }
}
</style>
