let acc = d3.select("#accordion")
let n = 1

function addRule(header, content) {

    var headerid = "header-" + n
    var collapseid = "collapse-" + n

    var card = acc.append("div").attr("class", "card")
    card.append("div").attr("class", "card-header").attr("id", headerid)
        .append("h5").attr("class", "mb-0")
        .append("button")
        .attr("class", "btn btn")
        .attr("data-toggle", "collapse")
        .attr("data-target", "#" + collapseid)
        .attr("aria-expanded", "true")
        .attr("aria-controls", collapseid)
        .text(header)

    card.append("div").attr("class", "collapse").attr("id", collapseid)
        .attr("aria-labelledby", header)
        .attr("data-parent", "#accordion")
        .append("div").attr("class", "card-body")
        .html(content)

    n += 1
}

addRule("Music Group Eligibility",
    `<p>Any Cornell Music Group is eligible to enter Big Red Icon: Battle of the Bands. A Music Group must fufill the following requirements:</p>
    
    <ul>
        <li>
            51% or more of the members must be full-time Cornell students
            <ul>
                <li>Professors and IC students do not count towards this 51% total</li>
                <li>For a full-time Cornell student to count towards the 51% total, they must be playing a significant role in the music group, as decided by the judging panel</li>
            </ul>
        </li>
        <li>A Music Group must have 2 or more performing members</li>
    </ul>`)

addRule("Video Submission Rules",
    `<p>Please send your submissions in video form! Make sure they meet the following requirements:</p>
    
    <ul>
        <li>Video submissions must be received by December 19th at 11:59pm in order to be eligible</li>
        <li>A video submission must be under 10 minutes in duration and two songs must be performed in order to be eligible</li>
        <li>It is greatly encouraged that every band submits a performance of at least one original song</li>
        <li>A video submission may not be edited in such a way that the performance cannot be recreated live (i.e. no splicing takes, only one camera angle, no video or audio effects that are not achievable in a live setting, no autotune, etc. Samples or other sources of pre-recorded material must be triggered live on video)</li>
        <li>All songs, including covers, originals, and samples under copyright that are longer than 30 seconds, need to be cited on the submission form. (when in doubt, use a citation!)</li>
        <li>Video submissions will not be judged for their video or audio quality, however music groups should aim to represent their sound and look as honestly as possible</li>
        <li>Video Submissions should include a short introduction by the band (who are you?)</li>
        <li>Video Submissions must be submitted via an unlisted or public youtube link</li>
    </ul>`)