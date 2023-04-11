import { html } from 'lit';
import '../src/mconn-project-3.js';

export default {
  title: 'MconnProject3',
  component: 'mconn-project-3',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <mconn-project-3
      style="--mconn-project-3-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </mconn-project-3>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
