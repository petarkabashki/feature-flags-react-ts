import { IFeature } from './Interfaces'

const dummyFlags: IFeature[] = [
  {
    id: "001",
    groupLabel: "GENERAL",
    label: "CASE MANAGEMENT",
    disabled: true
  },
  {
    id: "002",
    groupLabel: "GENERAL",
    label: "MAP TIMELINE",
    disabled: false
  },
  {
    id: "003",
    groupLabel: "GENERAL",
    label: "VIEWS & BRIEFINGS",
    disabled: true
  },
  {
    id: "004",
    groupLabel: "GENERAL",
    label: "NOTIFICATIONS",
    disabled: false
  },
  {
    id: "005",
    groupLabel: "GENERAL",
    label: "MASS COMMUNICATIONS",
    disabled: true
  },
  {
    id: "006",
    groupLabel: "GENERAL",
    label: "TRAFFIC CAMERAS",
    disabled: false
  },
  {
    id: "007",
    groupLabel: "SETTINGS",
    label: "AUDIT LOGS",
    disabled: false
  },
  {
    id: "008",
    groupLabel: "SETTINGS",
    label: "USERS",
    disabled: false
  },
  {
    id: "010",
    groupLabel: "SETTINGS",
    parent: "008",
    label: "USER ADD",
    disabled: false
  },
  {
    id: "011",
    groupLabel: "SETTINGS",
    parent: "008",
    label: "USER DELETE",
    disabled: false
  },
  {
    id: "012",
    groupLabel: "SETTINGS",
    parent: "008",
    label: "MAX USERS",
    select: {
      value: 10,
      list: [10, 20, 50, 100]
    },
    disabled: false
  },
  {
    id: "013",
    groupLabel: "ALERTS",
    label: "ALERT MANAGER",
    disabled: false
  },
  {
    id: "014",
    groupLabel: "ALERTS",
    label: "ALERT RULES",
    select: {
      value: 40,
      list: [20, 40, 60, 80]
    },
    disabled: false
  }
]

export default dummyFlags