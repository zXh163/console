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
module.exports = {
  'According to the HTTP header': '根據 HTTP header',
  'Add Component': '添加組件',
  'Add Component Successfully': '添加組件成功',
  'Add an Internet access rule for the application': '為應用添加外網訪問規則',
  'Add New Component': '添加新組件',
  'App store deployment': '應用商店部署',
  'App Template': '應用模板',
  'App Types': '應用的類型',
  APP_ICON_TIP: '點擊上傳應用圖示，尺寸最大為 120px * 120px',
  application: '應用',
  'Application Component': '應用組件',
  APP_COMPONENT_PL: '應用組件',
  'Application components combine workloads and services as components in applications': '應用組件組合了工作負載和服務作為應用中的組件',
  'Application governance is not enabled': '應用治理未啟用',
  'Application Icon': '應用圖示',
  'Application Route': '應用路由',
  APP_VERSION: '應用版本(可選)',
  'Build an app by app template': '應用模板部署',
  'Build an app by services': '通過服務構建應用',
  'Called Depth': '調用深度',
  'Called Services': '調用服務',
  'Choose existing services or create new service components to build an app': '選擇已有服務或者新建服務組件來構建應用',
  'Cluster Select': 'Cluster Select',
  'Cluster Selection': '集群選擇',
  'Component Version': '組件版本',
  'Composing App': '自制應用',
  'Create Application by Service': '通過服務構建應用',
  'Current Version': '目前版本',
  DEPLOY: '部署',
  'Deploy App': '部署應用',
  'Deploy applications with one-click application templates provided by Kubesphere': '通過 Kubesphere 提供的應用模板一鍵部署應用',
  'Deploy sample app Bookinfo': '部署示例應用 Bookinfo',
  'From third party Helm': '來自第三方 Helm',
  'How to use Application Governance': '如何使用應用治理',
  'If you need to access applications by application route, add routing rules': '如果您需要將應用通過應用路由的方式進行訪問，請添加路由規則',
  Log: '紀錄',
  'Max request retries': '最大請求重試次數',
  METHOD: '方式',
  'No Components': 'No Components',
  'No result found': '未查詢到結果',
  Off: '關閉',
  On: '開啟',
  'Please finish the sub form first': '請完成子表單的編輯',
  'Please input an application name': '請輸入應用名稱',
  'Please input component version': '請輸入組件版本',
  Process: '進程',
  Receive: '接收',
  Rollback: '回滾',
  'Sample apps can help you get started with app creation and app governance': '示例應用可以幫助您快速入手應用創建, 以及應用治理功能',
  Send: '發送',
  'Service components should not be empty': '服務組件不能為空',
  SERVICE_PORTS: '服務端口',
  SERVICE_PORT_NAME_DESC: '端口的名字必須遵循如下格式 <protocol>[-<suffix>]，可以是 http、http2、 grpc、 mongo、 或者 redis 作為 <protocol> ，這樣才能使用 Istio 的路由功能。例如 name: http2-foo 和 name: http 都是有效的端口名稱，而 name: http2foo 不是。',
  'Services & Operations': '服務與操作',
  'Session retention': '會話保持',
  'Success rate': '成功率',
  Tags: '標籤',
  Traffic: '流量',
  'Traffic Monitoring': '流量監測',
  Upgrade: '升級',
  'Workload Type': '負載類型',
  TOTAL_APPS: '共計 {num} 個應用',
  APP_WORKLOAD_TYPE_DESC: '支持無狀態服務(部署)及有狀態服務(有狀態副本集)',
  TYPE_SERVICE_DEPLOYMENT: '無狀態服務（部署）',
  TYPE_SERVICE_STATEFULSET: '有狀態服務（有狀態副本集）',
  'Last {hour} hour': '最近 {hour} 小時',
  'Last {hour} hours': '最近 {hour} 小時',
  'Last {day} days': '最近 {day} 天',
  WORKLOAD_NAME_EXIST: '工作負載 {name} 已存在',
  TIP_APP_TYPE: 'KubeSphere 支持來自於應用商店和應用倉庫的應用部署(基於 Helm)，同样也支持自制應用(Application CRD)。',
  TIP_APP_GOVERNANCE: '使用應用治理需要創建自制應用並對每項服務開啟服務治理功能',
  APP_REPOS_DESC: '應用倉庫來自於第三方的 Helm Chart Repo，通過視覺化的方式在 KubeSphere 中展示並提供部署及管理功能，用戶可以基於應用倉庫中的模板快速地一鍵部署應用。',
  TRAFFIC_MANAGEMENT_NO_MICROSERVICE_TIP: '流量治理依賴於微服務模組，目前集群未啟用微服務模組',
  TRACING_NO_MICROSERVICE_TIP: 'Tracing 依賴於微服務模組，目前集群未啟用微服務模組'
};