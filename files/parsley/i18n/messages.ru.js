window.ParsleyConfig = window.ParsleyConfig || {};

(function ($) {
  window.ParsleyConfig = $.extend( true, {}, window.ParsleyConfig, {
    messages: {
      // parsley //////////////////////////////////////
        defaultMessage: "Поле заполнено некорректно."
      , type: {
            email:      "Поле должно быть адресом электронной почты."
          , url:        "Поле должно быть ссылкой на сайт."
          , urlstrict:  "Поле должно быть ссылкой на сайт."
          , number:     "Поле должно быть числом."
          , digits:     "Поле должно содержать только цифры."
          , dateIso:    "Поле должно быть датой в формате (ГГГГ-ММ-ДД)."
          , alphanum:   "Поле должно содержать только  цифры и буквы"
        }
      , notnull:        "Поле должно быть не нулевым."
      , notblank:       "Поле не должно быть пустым."
      , required:       "Поле обязательно для заполнения."
      , regexp:         "Поле заполнено некорректно."
      , min:            "Значение поля должно быть больше %s."
      , max:            "Значение поля должно быть меньше %s."
      , range:          "Значение поля должно быть между %s и %s."
      , minlength:      "В поле должно быть минимум %s символов(а)."
      , maxlength:      "В поле должно быть не больше %s символов(а)."
      , rangelength:    "В поле должно быть от %s до %s символов(а)."
      , equalto:        "Значения полей должны быть одинаковыми."

      // parsley.extend ///////////////////////////////
    }
  });
}(window.jQuery || window.Zepto));