import { IFeatureGroup, IFeature } from './Interfaces'

const flags: IFeatureGroup[] = [
  {
    label: "GENERAL",
    features: [
      {
        label: "CASE MANAGEMENT",
        disabled: true
      },
      {
        label: "MAP TIMELINE",
        disabled: false
      },
      {
        label: "VIEWS & BRIEFINGS",
        disabled: true
      },
      {
        label: "NOTIFICATIONS",
        disabled: false
      },
      {
        label: "MASS COMMUNICATIONS",
        disabled: true
      },
      {
        label: "TRAFFIC CAMERAS",
        disabled: false
      },
    ]
  },
  {
    label: "SETTINGS",
    features: [
      {
        label: "AUDIT LOGS",
        disabled: false
      },
      {
        label: "USERS",
        disabled: false
      },
    ]
  },
  {
    label: "SETTINGS",
    features: [
      {
        label: "AUDIT LOGS",
        disabled: false
      },
      {
        label: "USERS",
        disabled: false,
        features: [
          {
            label: "USER ADD",
            disabled: false
          },
          {
            label: "USER DELETE",
            disabled: false
          },
          {
            label: "MAX USERS",
            disabled: false
          },
        ]

      },
    ]
  },
  {
    label: "ALERTS",
    features: [
      {
        label: "ALERT MANAGER",
        disabled: false
      },
      {
        label: "ALERT RULES",
        disabled: false
      }
    ]
  },
]

export default flags