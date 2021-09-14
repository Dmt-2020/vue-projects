import Vue from 'vue'
import App from './App.vue'
import {
  Button, 
  Select, 
  Header,
  Aside,
  Main,
  Footer,
  Container,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Option,
  OptionGroup,
  ButtonGroup,
  Table,
  TableColumn,
  Form,
  FormItem,
  TimePicker,
  DatePicker,
  Col,
  Submenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  BreadcrumbItem,
  Breadcrumb,
  Pagination,
  Tooltip,
  Tag,
  Alert,
  Row,
  Dialog,
  MessageBox,
  Divider,
  Tree
} from 'element-ui';
import './style/main.css'
import './style/elementui.scss'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueVirtualScroller from 'vue-virtual-scroller'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueVirtualScroller)

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Container)
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(FormItem);
Vue.use(Col)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem);
Vue.use(MenuItemGroup)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Tag)
Vue.use(Alert)
Vue.use(Row)
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Tree)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
