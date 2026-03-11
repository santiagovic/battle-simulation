import { ConditionData } from '../../shared/types/condition.types'

const conditionsArray: ConditionData[] = [
  {
    "name": "queimadura",
    "effects": [{
      "name": "hp",
      "value": 0.9375,
      "probability": 1,
      "immuneType": "fire"
    },
    {
      "name": "attack",
      "value": 0.5,
      "probability": 1,
      "immuneType": null
    }],
    "remainingTurns": null,
    "volatile": false,
  },
  {
    "name": "paralisia",
    "effects": [{
      "name": "speed",
      "value": 0.5,
      "probability": 1,
      "immuneType": null
    },
    {
      "name": "speed",
      "value": 0,
      "probability": 0.25,
      "immuneType": null
    }],
    "remainingTurns": null,
    "volatile": false,
  },
  {
    "name": "envenenamento",
    "effects": [{
      "name": "hp",
      "value": 0.875,
      "probability": 1,
      "immuneType": null
    }],
    "remainingTurns": null,
    "volatile": false,
  },
  {
    "name": "sono",
    "effects": [{
      "name": "speed",
      "value": 0,
      "probability": 1,
      "immuneType": null
    }],
    "remainingTurns": 3,
    "volatile": false,
  },
  {
    "name": "congelamento",
    "effects": [{
      "name": "speed",
      "value": 0,
      "probability": 0.8,
      "immuneType": null
    }],
    "remainingTurns": null,
    "volatile": false,
  },
  {
    "name": "geladura",
    "effects": [{
      "name": "hp",
      "value": 0.9375,
      "probability": 1,
      "immuneType": null
    }],
    "remainingTurns": null,
    "volatile": false,
  },
  {
    "name": "sonolência",
    "effects": [{
      "name": "defense",
      "value": 0.66,
      "probability": 1,
      "immuneType": null,
    }],
    "remainingTurns": 4,
    "volatile": false,
  },
  {
    "name": "confusão",
    "effects": {
      "method": "useAttack",
      "probability": 0.5,
    },
    "remainingTurns": null,
    "volatile": true,
  },
  {
    "name": "amedrontado",
    "effects": [{
      "name": "speed",
      "value": 0,
      "probability": 1,
      "immuneType": null
    }],
    "remainingTurns": 1,
    "volatile": true,
  },
  {
    "name": "apaixonado",
    "effects": [{
      "name": "accuracy",
      "value": 0.5,
      "probability": 1,
      "immuneType": null
    }],
    "remainingTurns": null,
    "volatile": true
  }
]

export const conditionList: ConditionData[] = conditionsArray
