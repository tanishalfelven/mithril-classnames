(function() {
"use strict"

function classnames() {
    args.forEach((className, i) => {
        if (Array.isArray(className)) {
            const [ condition, trueClass, falseClass ] = className;
            
            args[i] = condition ? trueClass : falseClass;
            return;
        }

        if (typeof className === "string") {
            args[i] = className;
            return;
        }

        args[i] = "";
    });

    return args.join(" ");
};

if (typeof module !== "undefined") module["exports"] = classnames;
else if (typeof window.m === "function" && !("classnames" in window.m)) window.m.classnames = classnames
else window.m = {classnames : classnames};

}());
