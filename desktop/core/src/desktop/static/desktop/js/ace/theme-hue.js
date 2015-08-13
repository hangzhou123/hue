ace.define("ace/theme/hue",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!1,t.cssClass="ace-hue",t.cssText=".ace_hidden-cursors .ace_cursor {opacity: 0;}.ace-hue .ace_gutter {background: #f6f6f6;color: #4D4D4C}.ace-hue .ace_print-margin {width: 1px;background: #f6f6f6}.ace-hue {background-color: #FFFFFF;color: #4D4D4C}.ace-hue .ace_cursor {color: #AEAFAD}.ace-hue .ace_marker-layer .ace_selection {background: #D6D6D6}.ace-hue.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-hue .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-hue .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #D1D1D1}.ace-hue .ace_gutter-active-line {background-color: #dcdcdc}.ace-hue .ace_marker-layer .ace_selected-word {border: 1px solid #D6D6D6}.ace-hue .ace_invisible {color: #D1D1D1}.ace-hue .ace_keyword,.ace-hue .ace_meta,.ace-hue .ace_storage,.ace-hue .ace_storage.ace_type,.ace-hue .ace_support.ace_type {color: #8959A8}.ace-hue .ace_keyword.ace_operator {color: #3E999F}.ace-hue .ace_constant.ace_character,.ace-hue .ace_constant.ace_language,.ace-hue .ace_constant.ace_numeric,.ace-hue .ace_keyword.ace_other.ace_unit,.ace-hue .ace_support.ace_constant,.ace-hue .ace_variable.ace_parameter {color: #F5871F}.ace-hue .ace_constant.ace_other {color: #666969}.ace-hue .ace_invalid {color: #FFFFFF;background-color: #C82829}.ace-hue .ace_invalid.ace_deprecated {color: #FFFFFF;background-color: #8959A8}.ace-hue .ace_fold {background-color: #4271AE;border-color: #4D4D4C}.ace-hue .ace_entity.ace_name.ace_function,.ace-hue .ace_support.ace_function,.ace-hue .ace_variable {color: #4271AE}.ace-hue .ace_support.ace_class,.ace-hue .ace_support.ace_type {color: #C99E00}.ace-hue .ace_heading,.ace-hue .ace_markup.ace_heading,.ace-hue .ace_string {color: #718C00}.ace-hue .ace_entity.ace_name.ace_tag,.ace-hue .ace_entity.ace_other.ace_attribute-name,.ace-hue .ace_meta.ace_tag,.ace-hue .ace_string.ace_regexp,.ace-hue .ace_variable {color: #C82829}.ace-hue .ace_comment {color: #8E908C}.ace-hue .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y}.ace-spinner, .ace-inline-button {position: absolute;z-index: 1030;}.ace-inline-button {opacity: 0.7;}.ace-inline-button:hover {opacity: 1;}.ace_tooltip {background: #F7F7F7 !important;border: none !important;color: #333;padding: 3px !important;}.ace_tooltip hr {margin: 3px !important;}.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line, .ace_editor.ace_autocomplete .ace_marker-layer .ace_line-hover {background-color: #DBE8F1;z-index: 1;}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})