// @flow

type ConditionalClasses = {
    [x: string]: boolean
}

export default class ClassNameUtil {

    static classNames(classNames: string[], conditionalClasses: ConditionalClasses): string {
        for (let classKey in conditionalClasses) {
            if (conditionalClasses[classKey]) {
                classNames.push(classKey);
            }
        }

        return classNames.join(" ");
    }
}
