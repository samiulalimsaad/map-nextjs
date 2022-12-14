import { alpha, InputBase, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const SearchCountry = () => {
    return (
        <div className="tw-form-control tw-text-slate-500">
            <label className="tw-input-group">
                <select className="tw-select tw-select-bordered">
                    <option disabled selected>
                        Select
                    </option>
                    <option>Lorem</option>
                    <option>ipsum</option>
                    <option>dolor</option>
                    <option>sit</option>
                    <option>amet</option>
                    <option>consectetur</option>
                    <option>adipisicing</option>
                    <option>elit</option>
                    <option>Quae</option>
                    <option>necessitatibus.</option>
                </select>
                <input
                    type="text"
                    placeholder="search..."
                    className="tw-input tw-input-bordered"
                />
            </label>
        </div>
    );
};

export default SearchCountry;
