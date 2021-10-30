import { defineComponent } from 'vue';
import './App.css';

export default defineComponent({
  props: {},

  setup(props) {
    return () => (
      <>
        {/* <div id="subapp-viewport"></div> */}
        <iframe src="http://localhost:7788/" frameborder="0"></iframe>
      </>
    );
  },
});
