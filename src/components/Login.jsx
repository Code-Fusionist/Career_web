import React, { useState } from "react";
import * as Styles from "./styles"; // Import the styled components
import "./Login.css"; // External styles for global adjustments

function Login() {
  const [signIn, setSignIn] = useState(true);

  return (
    <Styles.Container>
      {/* Sign Up Form */}
      <Styles.SignUpContainer signingIn={signIn}>
        <Styles.Form>
          <Styles.Title>Create Account</Styles.Title>
          <Styles.Input type="text" placeholder="Name" />
          <Styles.Input type="email" placeholder="Email" />
          <Styles.Input type="password" placeholder="Password" />
          <Styles.Button>Sign Up</Styles.Button>
        </Styles.Form>
      </Styles.SignUpContainer>

      {/* Sign In Form */}
      <Styles.SignInContainer signingIn={signIn}>
        <Styles.Form>
          <Styles.Title>Sign in</Styles.Title>
          <Styles.Input type="email" placeholder="Email" />
          <Styles.Input type="password" placeholder="Password" />
          <Styles.Anchor href="#">Forgot your password?</Styles.Anchor>
          <Styles.Button>Sign In</Styles.Button>
        </Styles.Form>
      </Styles.SignInContainer>

      {/* Overlay Section */}
      <Styles.OverlayContainer signingIn={signIn}>
        <Styles.Overlay signingIn={signIn}>
          {/* Left Overlay Panel for Sign In */}
          <Styles.LeftOverlayPanel signingIn={signIn}>
            <Styles.Title>Welcome Back!</Styles.Title>
            <Styles.Paragraph>
              To keep connected with us please log in with your personal info
            </Styles.Paragraph>
            <Styles.GhostButton onClick={() => setSignIn(true)}>
              Sign In
            </Styles.GhostButton>
          </Styles.LeftOverlayPanel>

          {/* Right Overlay Panel for Sign Up */}
          <Styles.RightOverlayPanel signingIn={signIn}>
            <Styles.Title>Hello, Friend!</Styles.Title>
            <Styles.Paragraph>
              Enter your personal details and start your journey with us
            </Styles.Paragraph>
            <Styles.GhostButton onClick={() => setSignIn(false)}>
              Sign Up
            </Styles.GhostButton>
          </Styles.RightOverlayPanel>
        </Styles.Overlay>
      </Styles.OverlayContainer>
    </Styles.Container>
  );
}

export default Login;