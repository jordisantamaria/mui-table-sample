import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { css } from "@emotion/react";
import Link from "next/link";

const Nav = () => {

  return (
    <AppBar position="static" color="transparent">
      <Container>
        <div
          css={css`
            display: flex;
            padding: 16px 0;
          `}
        >
          <Link href={"/"}>
            <Typography
              textAlign="center"
              css={css`
                margin-right: 32px;
              `}
            >
              Fetch1
            </Typography>
          </Link>
          <Link href={"/fetch2"}>
            <Typography
              textAlign="center"
              css={css`
                margin-right: 32px;
              `}
            >
              Fetch2
            </Typography>
          </Link>
        </div>
      </Container>
    </AppBar>
  );
};
export default Nav;


