import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import * as React from 'react'
import { ThemeProvider } from './theme-provider'
import { MainLayout } from '@/components/Layout'

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Ooops, something went wrong :( </h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  )
}

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <ThemeProvider>
            <Router>
              <MainLayout>{children}</MainLayout>
            </Router>
          </ThemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
