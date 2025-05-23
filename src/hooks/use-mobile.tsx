
import * as React from "react"

const MOBILE_BREAKPOINT = 1024 // Increased from 768 to 1024 for better menu handling

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    // Initialize immediately based on window width
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Check on mount
    checkMobile()
    
    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)
    
    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Return boolean value (default to false if still null)
  return isMobile === null ? false : isMobile
}
