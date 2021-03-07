import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  bgHeader: {
    height: "30vh",
    backgroundImage: "linear-gradient(to right, #48439E, #5F83EE)",
  },
  bgMap: {
    height: "70vh",
    backgroundColor: "pink",
  },
  ipSection: {
    // backgroundColor: "black",
    position: "absolute",
    top: "5%",
    height: "30vh",
    width: "50vw",
    margin: "auto",
    left: "0",
    right: "0",
  },
  ipRoot: {
    color: "white",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px 0 0 5px",
    width: "400px",
    "& input": {
      padding: "9px 0",
    },
  },
  inputLabel: {
    zIndex: "1",
    paddingLeft: "5px",
  },
  submitButton: {
    borderRadius: "0 5px 5px 0",
    color: "white",
    backgroundColor: "#000000",
    width: "40px",
    minWidth: "0px",
  },
  dataContainer: {
    backgroundColor: "white",
    marginTop: "3%",
    borderRadius: "5px",
    height: "50%",
  },
  data: {
    height: "100%",
    width: "24.89%",
    // backgroundColor: "black",
    borderRight: "solid 1px gray",
  },
});

export default useStyles;
