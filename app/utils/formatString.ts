export default (value: string, typecase: "kebab" | "title") => {
    switch (typecase) {
        case "kebab":
            return value.trim().toLowerCase().replace(/\s+/g, "-");
        case "title":
            return value.split("-").map(word => word.charAt(0)
                .toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        default:
            return "Unknown"
    }
}