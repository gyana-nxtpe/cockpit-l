import { UserType } from "../../common-types";

export type WidgetBlock = {
        [UserType.MERCHANT]: SingleWidget[];
        ReCollect : SingleWidget[];
        RideCollect : SingleWidget[];
}

export type SingleWidget = {
        title: string,
        kpis: singleKpi[] | chartWidget[],
        chartType:ChartType
}

export type singleKpi = {
        permission: string;
        title: string,
        data: Partial<singleKpiData>,
        lmtdLabel: string,
        id: string,
}

export type chartWidget = {
        id: string,
        permission: string,
}

export enum ChartType {
        DAYWISE = "DAYWISE",
        SPLIT = "SPLIT",
        MTDvsLMTD = "MTDvsLMTD",
        FTD = "FTD"
}


export enum ChangeType {
        POSITIVE = "POSITIVE",
        NEGATIVE = "NEGATIVE",
        NEUTRAL = "NEUTRAL"
}


export interface singleKpiData{
        currentValue: string;
        previousValue: string;
        percentChange: string
        changeDirection: string,
        changeType: ChangeType;
}
