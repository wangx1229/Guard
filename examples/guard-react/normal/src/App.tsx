import React from 'react'

import { GuardMode, GuardProvider, SocialConnectionProvider } from '@authing/guard-react'

import '@authing/guard-react/dist/esm/guard.min.css'

import * as facePlugin from 'face-api.js'

import RouterComponent from './router'

import './App.css'

export default function App() {
  return (
    <GuardProvider
      appId="6322ef4c06b1a01036695b33"
      isSSO={true}
      mode={GuardMode.Modal}
      config={{
        socialConnections: [SocialConnectionProvider.GITHUB],
      }}
      facePlugin={facePlugin}
    >
      <RouterComponent></RouterComponent>
    </GuardProvider>
  )
}
