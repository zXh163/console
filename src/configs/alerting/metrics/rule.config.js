/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

const CONDITION_OPTIONS = [
  {
    label: '>',
    value: '>',
  },
  {
    label: '>=',
    value: '>=',
  },
  {
    label: '<',
    value: '<',
  },
  {
    label: '<=',
    value: '<=',
  },
]

export const SEVERITY_LEVEL = [
  {
    type: 'critical',
    prefixIcon: 'information',
    color: {
      primary: '#fae7e5',
      secondary: '#ca2621',
    },
    label: 'Critical Alert',
    value: 'critical',
  },
  {
    type: 'warning',
    prefixIcon: 'information',
    color: {
      primary: '#fae7e5',
      secondary: '#f5a623',
    },
    label: 'Major Alert',
    value: 'warning',
  },
  {
    type: 'info',
    prefixIcon: 'information',
    color: {
      primary: '#fae7e5',
      secondary: '#79879c',
    },
    label: 'Minor Alert',
    value: 'info',
  },
]

export const getBaseRuleConfig = ({ condition = {}, thresholds = {} } = {}) => [
  {
    name: 'condition_type',
    options: CONDITION_OPTIONS,
    ...condition,
  },
  {
    type: 'number',
    name: 'thresholds',
    placeholder: 'Threshold',
    ...thresholds,
  },
]

export const BASE_RULE_CONFIG = getBaseRuleConfig()

export const PERCENT_RULE_CONFIG = getBaseRuleConfig({
  thresholds: {
    min: 1,
    max: 100,
    unit: '%',
    converter: value => value / 100,
  },
})

export const CPU_RULE_CONFIG = getBaseRuleConfig({
  thresholds: {
    unit: 'core',
  },
})

export const MEMORY_RULE_CONFIG = getBaseRuleConfig({
  thresholds: {
    unit: 'Mi',
  },
})

export const DISK_RULE_CONFIG = getBaseRuleConfig({
  thresholds: {
    unit: 'GB',
    converter: value => value * 1000 ** 3,
  },
})

export const THROUGHPUT_RULE_CONFIG = getBaseRuleConfig({
  thresholds: {
    unit: 'KB/s',
    converter: value => value * 1000,
  },
})

export const BANDWIDTH_RULE_CONFIG = getBaseRuleConfig({
  thresholds: {
    unit: 'Mbps',
    converter: value => value * (1024 ** 2 / 8),
  },
})
