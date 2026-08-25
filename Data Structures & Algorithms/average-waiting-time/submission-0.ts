class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers: number[][]): number {
        // track cur time. the first customer is always going
        // to have a wait time of arrival+time-arrival...

        // if the next customer has an arrival time that is < curTime
        // then they have to wait for the prev customer's meal to be ready

        // the the next customer has an arrival time that is > curTime
        // then they do not have to wait and their wait time will also
        // be arrival+time-arrival?
        let curTime = 0;
        // track time waiting.
        let customerWaitTimes = [];

        for(let [arrival, time] of customers){
            let waittime = 0;
            if(arrival >= curTime){
                curTime = arrival
                curTime += time;
                waittime = curTime-arrival;
            } else {
                waittime = curTime-arrival+time;
                curTime += time;
            }
            customerWaitTimes.push(waittime);
        }
        
        let sum = 0;
        for(let v of customerWaitTimes){
            sum+=v;
        }
        return sum/customerWaitTimes.length;
    }
}











