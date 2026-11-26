# Static Website Hosting Using Amazon S3 and CloudFront

## Project Overview

This project demonstrates how to host a static portfolio website using Amazon S3 and Amazon CloudFront.

The website is stored in an S3 bucket and delivered globally through CloudFront. Origin Access Control (OAC) is configured to securely connect CloudFront with a private S3 bucket.

A custom domain is configured using Amazon Route 53, and HTTPS is enabled using AWS Certificate Manager (ACM).

**Live Website:** https://subhransu.online

## AWS Services Used

- Amazon S3 – Static website file storage.
- Amazon CloudFront – Content Delivery Network (CDN).
- Origin Access Control (OAC) – Secure access between CloudFront and S3.
- Amazon Route 53 – DNS management and custom domain configuration.
- AWS Certificate Manager (ACM) – SSL/TLS certificate for HTTPS.
- AWS IAM – Access and permission management.

## Architecture

Visitor → Route 53 → CloudFront → OAC → Private S3 Bucket

## Implementation Steps

### 1. S3 Bucket Configuration
- Created an S3 bucket.
- Enabled bucket versioning.
- Configured default encryption using SSE-S3.
- Uploaded HTML, CSS and JavaScript files.
- Configured the bucket for static website hosting.

### 2. CloudFront Configuration
- Created a CloudFront distribution.
- Configured the S3 bucket as the origin.
- Created and attached Origin Access Control (OAC).
- Configured the default root object as `index.html`.
- Configured the S3 bucket policy to allow CloudFront access.

### 3. S3 Security Configuration
- Removed public-read access.
- Enabled all four Block Public Access settings.
- Configured a bucket policy allowing CloudFront to retrieve objects using `s3:GetObject`.
- Restricted access using the CloudFront distribution ARN through `AWS:SourceArn`.

### 4. HTTPS Configuration
- Requested a public SSL/TLS certificate using AWS Certificate Manager.
- Completed DNS validation.
- Used the US East (N. Virginia) region (`us-east-1`) for the CloudFront certificate.
- Attached the certificate to the CloudFront distribution.

### 5. Route 53 Configuration
- Created a public hosted zone.
- Configured domain nameservers at GoDaddy.
- Created an A Alias record pointing to CloudFront.
- Connected the custom domain `subhransu.online`.

### 6. Cache Invalidation
- Created CloudFront cache invalidations.
- Used `/*` to invalidate cached website objects after updates.

## Security Implementation

- S3 bucket configured as private.
- CloudFront OAC used for secure origin access.
- Public access blocked at the S3 bucket level.
- HTTPS enabled through CloudFront.
- S3 server-side encryption enabled using SSE-S3.

## Testing and Verification

- Verified website accessibility through CloudFront.
- Verified custom domain resolution using `nslookup`.
- Verified HTTPS response using `curl`.
- Confirmed successful HTTP 200 response.
- Verified that direct public S3 website access was blocked.
- Confirmed website accessibility through CloudFront.

## Live Project

https://subhransu.online

## Key Learnings

- Static website hosting using Amazon S3.
- CloudFront distribution and CDN configuration.
- Secure S3 origin access using OAC.
- IAM-based resource permissions and bucket policies.
- DNS configuration using Route 53.
- SSL/TLS certificate management using ACM.
- CloudFront cache invalidation.
- AWS troubleshooting and connectivity verification.