import { Container } from "@mui/material"
import CardBackUpReleases from "../Card/Card"
import Header from "../../Header/Header"

export default function Landing() {
    return (
        <>
            <div><Header /></div>
            <div style={{ maxWidth: "50%", marginLeft: "auto", marginRight: "auto" }}>
                <h1 style={{ display: "block", textAlign: "center", fontFamily: "monospace" }}>dsrptv_records</h1>
                <h3 style={{ display: "block", textAlign: "center", fontFamily: "monospace", fontWeight: 'bolder' }}>
                    our website is under construction for a dsrptv experience. while we get that ready for you, check out our catalog and mixtapes:
                </h3>
                <h5 style={{ display: "block", textAlign: "center", marginTop: "0px" }}></h5>
            </div>

            <Container style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "5px" }}>
                <CardBackUpReleases truorfal={true} />
                <CardBackUpReleases truorfal={false} />
            </Container>
            <br /><br /><br /><br />
        </>
    )
}
