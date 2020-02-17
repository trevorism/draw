package com.trevorism.gcloud.webapi.controller

import io.swagger.annotations.Api

import javax.ws.rs.POST
import javax.ws.rs.Path
import java.util.logging.Logger

@Api("Image Operations")
@Path("/image")
class ImageController {

    Logger logger = Logger.getLogger(ImageController.class.name)

    @POST
    String generateImage(String result) {
        logger.info("Received ${result}")
        return result
    }
}
