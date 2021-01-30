module.exports = function check(str, bracketsConfig) {
    newString = str;

    while (newString != "") {
        flag = false;
        for (i = 0; i < bracketsConfig.length; i++) {
            brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            if (newString.includes(brackets)) {
                newString = newString.replace(brackets, "");
                flag = true;
            }
        }
        if (!flag) break;
    }
    if (newString === "") return true;
    else return false;
};
