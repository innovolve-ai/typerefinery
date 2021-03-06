import { Module, VuexModule } from "vuex-module-decorators"
import store from "../index"

@Module({
  name: "FlowMessage",
  store: store,
  dynamic: true,
  preserveState: localStorage.getItem("flowMessage") !== null,
})
export default class FlowMessage extends VuexModule {
  data = {
    basic: {
      nodes: [
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000005",
          G_name: "event",
          has: ["0x836f800428000161"],
          dtype: "actual",
          id: 0,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000001",
          G_name: "event",
          has: ["0x836f800428000161"],
          dtype: "actual",
          id: 1,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000011",
          G_name: "event",
          has: ["0x836f800428000161"],
          dtype: "actual",
          id: 2,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000002",
          G_name: "event",
          has: ["0x836f800428000162"],
          dtype: "actual",
          id: 3,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000006",
          G_name: "event",
          has: ["0x836f800428000162"],
          dtype: "actual",
          id: 4,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000012",
          G_name: "event",
          has: ["0x836f800428000163"],
          dtype: "actual",
          id: 5,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000015",
          G_name: "event",
          has: ["0x836f800428000161"],
          dtype: "actual",
          id: 6,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000016",
          G_name: "event",
          has: ["0x836f800428000165"],
          dtype: "actual",
          id: 7,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000007",
          G_name: "event",
          has: ["0x836f800428000163"],
          dtype: "actual",
          id: 8,
        },
        {
          type: "entity",
          symbol: "b",
          G_id: "0x826e80028000000000000013",
          G_name: "event",
          has: ["0x836f800428000162"],
          dtype: "actual",
          id: 9,
        },
        {
          type: "entity",
          symbol: "a",
          G_id: "0x826e80018000000000000000",
          G_name: "log",
          has: [],
          dtype: "actual",
          id: 10,
        },
        {
          type: "attribute",
          symbol: "e",
          G_id: "0x836f80012800034c3130",
          G_name: "traceId",
          value: "L10",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 11,
        },
        {
          type: "attribute",
          symbol: "f",
          G_id: "0x836f8003148000000000000000",
          G_name: "index",
          value: 0,
          datatype: "LONG",
          has: [],
          dtype: "actual",
          id: 12,
        },
        {
          type: "attribute",
          symbol: "c",
          G_id: "0x836f800428000161",
          G_name: "eventName",
          value: "a",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 13,
        },
        {
          type: "attribute",
          symbol: "f",
          G_id: "0x836f8003148000000000000001",
          G_name: "index",
          value: 1,
          datatype: "LONG",
          has: [],
          dtype: "actual",
          id: 14,
        },
        {
          type: "attribute",
          symbol: "e",
          G_id: "0x836f80012800034c3135",
          G_name: "traceId",
          value: "L15",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 15,
        },
        {
          type: "attribute",
          symbol: "c",
          G_id: "0x836f800428000165",
          G_name: "eventName",
          value: "e",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 16,
        },
        {
          type: "attribute",
          symbol: "e",
          G_id: "0x836f80012800034c3131",
          G_name: "traceId",
          value: "L11",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 17,
        },
        {
          type: "attribute",
          symbol: "c",
          G_id: "0x836f800428000163",
          G_name: "eventName",
          value: "c",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 18,
        },
        {
          type: "attribute",
          symbol: "f",
          G_id: "0x836f8003148000000000000002",
          G_name: "index",
          value: 2,
          datatype: "LONG",
          has: [],
          dtype: "actual",
          id: 19,
        },
        {
          type: "attribute",
          symbol: "e",
          G_id: "0x836f80012800034c3134",
          G_name: "traceId",
          value: "L14",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 20,
        },
        {
          type: "attribute",
          symbol: "c",
          G_id: "0x836f800428000162",
          G_name: "eventName",
          value: "b",
          datatype: "STRING",
          has: [],
          dtype: "actual",
          id: 21,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000004",
          G_name: "trace",
          has: ["0x836f80012800034c3131", "0x836f8003148000000000000000"],
          edges: {
            item: ["0x826e80028000000000000005"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 22,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000000",
          G_name: "trace",
          has: ["0x836f80012800034c3130", "0x836f8003148000000000000000"],
          edges: {
            item: ["0x826e80028000000000000001"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 23,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000010",
          G_name: "trace",
          has: ["0x836f80012800034c3134", "0x836f8003148000000000000000"],
          edges: {
            item: ["0x826e80028000000000000011"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 24,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000001",
          G_name: "trace",
          has: ["0x836f80012800034c3130", "0x836f8003148000000000000001"],
          edges: {
            item: ["0x826e80028000000000000002"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 25,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000005",
          G_name: "trace",
          has: ["0x836f80012800034c3131", "0x836f8003148000000000000001"],
          edges: {
            item: ["0x826e80028000000000000006"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 26,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000011",
          G_name: "trace",
          has: ["0x836f80012800034c3134", "0x836f8003148000000000000001"],
          edges: {
            item: ["0x826e80028000000000000012"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 27,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000014",
          G_name: "trace",
          has: ["0x836f80012800034c3135", "0x836f8003148000000000000000"],
          edges: {
            item: ["0x826e80028000000000000015"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 28,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000015",
          G_name: "trace",
          has: ["0x836f80012800034c3135", "0x836f8003148000000000000001"],
          edges: {
            item: ["0x826e80028000000000000016"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 29,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000006",
          G_name: "trace",
          has: ["0x836f80012800034c3131", "0x836f8003148000000000000002"],
          edges: {
            item: ["0x826e80028000000000000007"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 30,
        },
        {
          type: "relation",
          symbol: "d",
          G_id: "0x847080028000000000000012",
          G_name: "trace",
          has: ["0x836f80012800034c3134", "0x836f8003148000000000000002"],
          edges: {
            item: ["0x826e80028000000000000013"],
            owner: ["0x826e80018000000000000000"],
          },
          dtype: "actual",
          id: 31,
        },
      ],
      links: [
        {
          G_target: "0x836f800428000161",
          role: "has",
          G_source: "0x826e80028000000000000005",
          target: 13,
          source: 0,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000161",
          role: "has",
          G_source: "0x826e80028000000000000001",
          target: 13,
          source: 1,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000161",
          role: "has",
          G_source: "0x826e80028000000000000011",
          target: 13,
          source: 2,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000162",
          role: "has",
          G_source: "0x826e80028000000000000002",
          target: 21,
          source: 3,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000162",
          role: "has",
          G_source: "0x826e80028000000000000006",
          target: 21,
          source: 4,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000163",
          role: "has",
          G_source: "0x826e80028000000000000012",
          target: 18,
          source: 5,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000161",
          role: "has",
          G_source: "0x826e80028000000000000015",
          target: 13,
          source: 6,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000165",
          role: "has",
          G_source: "0x826e80028000000000000016",
          target: 16,
          source: 7,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000163",
          role: "has",
          G_source: "0x826e80028000000000000007",
          target: 18,
          source: 8,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f800428000162",
          role: "has",
          G_source: "0x826e80028000000000000013",
          target: 21,
          source: 9,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3131",
          role: "has",
          G_source: "0x847080028000000000000004",
          target: 17,
          source: 22,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000000",
          role: "has",
          G_source: "0x847080028000000000000004",
          target: 12,
          source: 22,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3130",
          role: "has",
          G_source: "0x847080028000000000000000",
          target: 11,
          source: 23,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000000",
          role: "has",
          G_source: "0x847080028000000000000000",
          target: 12,
          source: 23,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3134",
          role: "has",
          G_source: "0x847080028000000000000010",
          target: 20,
          source: 24,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000000",
          role: "has",
          G_source: "0x847080028000000000000010",
          target: 12,
          source: 24,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3130",
          role: "has",
          G_source: "0x847080028000000000000001",
          target: 11,
          source: 25,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000001",
          role: "has",
          G_source: "0x847080028000000000000001",
          target: 14,
          source: 25,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3131",
          role: "has",
          G_source: "0x847080028000000000000005",
          target: 17,
          source: 26,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000001",
          role: "has",
          G_source: "0x847080028000000000000005",
          target: 14,
          source: 26,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3134",
          role: "has",
          G_source: "0x847080028000000000000011",
          target: 20,
          source: 27,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000001",
          role: "has",
          G_source: "0x847080028000000000000011",
          target: 14,
          source: 27,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3135",
          role: "has",
          G_source: "0x847080028000000000000014",
          target: 15,
          source: 28,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000000",
          role: "has",
          G_source: "0x847080028000000000000014",
          target: 12,
          source: 28,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3135",
          role: "has",
          G_source: "0x847080028000000000000015",
          target: 15,
          source: 29,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000001",
          role: "has",
          G_source: "0x847080028000000000000015",
          target: 14,
          source: 29,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3131",
          role: "has",
          G_source: "0x847080028000000000000006",
          target: 17,
          source: 30,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000002",
          role: "has",
          G_source: "0x847080028000000000000006",
          target: 19,
          source: 30,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f80012800034c3134",
          role: "has",
          G_source: "0x847080028000000000000012",
          target: 20,
          source: 31,
          is_act_Attr: true,
        },
        {
          G_target: "0x836f8003148000000000000002",
          role: "has",
          G_source: "0x847080028000000000000012",
          target: 19,
          source: 31,
          is_act_Attr: true,
        },
        {
          G_target: "0x826e80028000000000000005",
          role: "item",
          G_source: "0x847080028000000000000004",
          target: 0,
          source: 22,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000004",
          target: 10,
          source: 22,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000001",
          role: "item",
          G_source: "0x847080028000000000000000",
          target: 1,
          source: 23,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000000",
          target: 10,
          source: 23,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000011",
          role: "item",
          G_source: "0x847080028000000000000010",
          target: 2,
          source: 24,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000010",
          target: 10,
          source: 24,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000002",
          role: "item",
          G_source: "0x847080028000000000000001",
          target: 3,
          source: 25,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000001",
          target: 10,
          source: 25,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000006",
          role: "item",
          G_source: "0x847080028000000000000005",
          target: 4,
          source: 26,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000005",
          target: 10,
          source: 26,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000012",
          role: "item",
          G_source: "0x847080028000000000000011",
          target: 5,
          source: 27,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000011",
          target: 10,
          source: 27,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000015",
          role: "item",
          G_source: "0x847080028000000000000014",
          target: 6,
          source: 28,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000014",
          target: 10,
          source: 28,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000016",
          role: "item",
          G_source: "0x847080028000000000000015",
          target: 7,
          source: 29,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000015",
          target: 10,
          source: 29,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000007",
          role: "item",
          G_source: "0x847080028000000000000006",
          target: 8,
          source: 30,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000006",
          target: 10,
          source: 30,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80028000000000000013",
          role: "item",
          G_source: "0x847080028000000000000012",
          target: 9,
          source: 31,
          is_act_Attr: false,
        },
        {
          G_target: "0x826e80018000000000000000",
          role: "owner",
          G_source: "0x847080028000000000000012",
          target: 10,
          source: 31,
          is_act_Attr: false,
        },
      ],
      G_types: {
        entity: ["log", "event"],
        attribute: ["eventName", "index", "traceId"],
        relation: ["trace"],
        schema: [
          {
            target_name: "eventName",
            role: "has",
            direction: "down",
            source_name: "event",
          },
          {
            target_name: "event",
            role: "item",
            direction: "down",
            source_name: "trace",
          },
          {
            role: "owner",
            target_name: "log",
            direction: "down",
            source_name: "trace",
          },
          {
            role: "has",
            target_name: "index",
            direction: "down",
            source_name: "trace",
          },
          {
            target_name: "traceId",
            role: "has",
            direction: "down",
            source_name: "trace",
          },
        ],
      },
      groups: [],
      constraints: [],
    },
    grouped: {},
  }
}
