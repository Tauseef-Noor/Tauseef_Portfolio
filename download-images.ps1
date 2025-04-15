$imageUrls = @(
    @{
        url = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500";
        path = "public/images/profile.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800";
        path = "public/images/about.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800";
        path = "public/images/project1.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800";
        path = "public/images/project2.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800";
        path = "public/images/project3.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800";
        path = "public/images/project4.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800";
        path = "public/images/project5.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800";
        path = "public/images/project6.jpg"
    }
)

foreach ($image in $imageUrls) {
    Write-Host "Downloading $($image.url) to $($image.path)"
    Invoke-WebRequest -Uri $image.url -OutFile $image.path
}

Write-Host "All images downloaded successfully!"
