import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';
import {
  DataTable,
  RestQuery,
  TableColumn,
  TableValue,
} from './components/app-building';
import { Collapse } from './components/collapse';
import { Section } from './components/hello-world';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'x8vPDyDdbQwzXMaAvvEbEA',
      token:
        'V0Rwy0NiHmXbu4wPXEjSErNHXInpnCS6FmB6eHTvUdeuczSv7cjEBQIvoQ4UzKUgvwjwte6UFLBkf4s5v1g',
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

const DEFAULT_ITEMS = [
  {
    name: 'John Brown',
    age: 19,
    address: 'New York No. 1 Lake Park',
    tags: ['student', 'developer'],
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['teacher'],
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

PLASMIC.registerComponent(DataTable, {
  name: 'DataTable',
  props: {
    items: {
      type: 'array',
      defaultValue: DEFAULT_ITEMS,
    },

    columns: {
      type: 'slot',
      allowedComponents: ['TableColumn'],
      defaultValue: Object.keys(DEFAULT_ITEMS[0]).map((columnName) => ({
        type: 'component',
        name: 'TableColumn',
        props: {
          title: capitalizeFirstLetter(columnName),
          dataIndex: columnName,
        },
      })),
    },
  },
});

PLASMIC.registerComponent(TableColumn, {
  name: 'TableColumn',
  parentComponentName: 'DataTable',
  providesData: true,
  props: {
    // The title text to show in the column headers
    title: {
      type: 'string',
      defaultValue: 'Name',
    },

    // The path for the data field to get the value from
    // Display field of the data record, support nest path by string array
    dataIndex: {
      type: 'string',
      defaultValue: 'name',
    },

    // TODO: Debug why the ctx object is empty (expected to be ctx = {tableColumn})
    // dataIndex: {
    //   type: "dataSelector",
    //   data: (props, ctx) => {
    //     console.log(">>> M dataSelector", {props, ctx});
    //     return ctx?.tableColumns ?? {}}
    //     ,
    //   displayName: "Field",
    //   description: "Field to be displayed.",
    //   defaultValue: ["name"],
    // },

    // Plasmic - Custom column template
    columnTemplate: {
      type: 'slot',
      defaultValue: {
        type: 'vbox',
        styles: {
          padding: 0,
        },
        children: [
          {
            type: 'component',
            name: 'TableValue',
          },
        ],
      },
    },
  },
});

PLASMIC.registerComponent(TableValue, {
  name: 'TableValue',
  parentComponentName: 'TableColumn',
  props: {},
});

PLASMIC.registerComponent(RestQuery, {
  name: 'RestQuery',
  providesData: true,
  props: {
    url: {
      type: 'string',
      defaultValue: 'https://jsonplaceholder.typicode.com/posts',
    },
    method: {
      type: 'choice',
      options: ['GET', 'POST'],
      defaultValueHint: 'GET',
    },
    children: {
      type: 'slot',
      defaultValue: [
        {
          type: 'vbox',
          children: [
            {
              type: 'text',
              value: 'Insert some contents here',
            },
          ],
        },
      ],
    },
  },
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(Section, {
  name: 'Section',
  props: {
    children: {
      type: 'slot',
    },
    hideHeading: {
      type: 'boolean',
    },
  },
});

PLASMIC.registerComponent(Collapse, {
  name: 'Collapse',
  props: {
    title: {
      type: 'slot',
      defaultValue: 'This is the title',
    },
    children: {
      type: 'slot',
      defaultValue: 'This is the body',
    },
    previewShown: 'boolean',
  },
});
